class Solution:
    def isValid(self, strs: str) -> bool:
        parathesis=[]
        for s in strs:
            if s == '{' or s == '(' or s == '[':
                parathesis.append(s)
            else:
                match s:

                    case ']':
                        if len(parathesis)>0 and parathesis[len(parathesis)-1]=='[':
                            parathesis.pop()
                        else:
                            return False
                    case '}':
                        if len(parathesis)>0 and parathesis[len(parathesis)-1]=='{':
                            parathesis.pop()
                        else:
                            return False
                    case ')':
                        if len(parathesis)>0 and parathesis[len(parathesis)-1]=='(':
                            parathesis.pop()
                        else:
                            return False
                

            
                        
        if len(parathesis)==0:
            return True
        else:
            return False