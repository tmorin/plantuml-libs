# Codemagic


```text
simpleicons-5/C/Codemagic
```

```text
include('simpleicons-5/C/Codemagic')
```



| Illustration | Codemagic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Codemagic.png) | ![illustration for Codemagic](../../simpleicons-5/C/Codemagic.Local.png) |




## Codemagic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Codemagic
include('simpleicons-5/C/Codemagic')

' renders the element
Codemagic('Codemagic', 'Codemagic', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Codemagic
include('simpleicons-5/C/Codemagic')

' renders the element
Codemagic('Codemagic', 'Codemagic', 'an optional tech label')
@enduml
```

