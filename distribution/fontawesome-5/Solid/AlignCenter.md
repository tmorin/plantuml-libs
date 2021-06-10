# AlignCenter


```text
fontawesome-5/Solid/AlignCenter
```

```text
include('fontawesome-5/Solid/AlignCenter')
```



| Illustration | AlignCenter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/AlignCenter.png) | ![illustration for AlignCenter](../../fontawesome-5/Solid/AlignCenter.Local.png) |




## AlignCenter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element AlignCenter
include('fontawesome-5/Solid/AlignCenter')

' renders the element
AlignCenter('AlignCenter', 'Align Center', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element AlignCenter
include('fontawesome-5/Solid/AlignCenter')

' renders the element
AlignCenter('AlignCenter', 'Align Center', 'an optional tech label')
@enduml
```

