# ClaimCheck


```text
eip-1/MessageTransformation/ClaimCheck
```

```text
include('eip-1/MessageTransformation/ClaimCheck')
```



| Illustration | ClaimCheck | ClaimCheckGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessageTransformation/ClaimCheck.png) | ![illustration for ClaimCheck](../../eip-1/MessageTransformation/ClaimCheck.Local.png) | ![illustration for ClaimCheckGroup](../../eip-1/MessageTransformation/ClaimCheckGroup.Local.png) |




## ClaimCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element ClaimCheck
include('eip-1/MessageTransformation/ClaimCheck')

' renders the element
ClaimCheck('ClaimCheck', 'Claim Check', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element ClaimCheck
include('eip-1/MessageTransformation/ClaimCheck')

' renders the element
ClaimCheck('ClaimCheck', 'Claim Check', 'an optional tech label')
@enduml
```

## ClaimCheckGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element ClaimCheckGroup
include('eip-1/MessageTransformation/ClaimCheck')

' renders the element
ClaimCheckGroup('ClaimCheckGroup', 'Claim Check Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element ClaimCheckGroup
include('eip-1/MessageTransformation/ClaimCheck')

' renders the element
ClaimCheckGroup('ClaimCheckGroup', 'Claim Check Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

