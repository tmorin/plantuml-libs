# Transportforireland


```text
simpleicons-5/T/Transportforireland
```

```text
include('simpleicons-5/T/Transportforireland')
```



| Illustration | Transportforireland |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Transportforireland.png) | ![illustration for Transportforireland](../../simpleicons-5/T/Transportforireland.Local.png) |




## Transportforireland

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Transportforireland
include('simpleicons-5/T/Transportforireland')

' renders the element
Transportforireland('Transportforireland', 'Transportforireland', 'an optional tech label')
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

' loads the Item which embeds the element Transportforireland
include('simpleicons-5/T/Transportforireland')

' renders the element
Transportforireland('Transportforireland', 'Transportforireland', 'an optional tech label')
@enduml
```

