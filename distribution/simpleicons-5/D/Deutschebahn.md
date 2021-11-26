# Deutschebahn


```text
simpleicons-5/D/Deutschebahn
```

```text
include('simpleicons-5/D/Deutschebahn')
```



| Illustration | Deutschebahn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Deutschebahn.png) | ![illustration for Deutschebahn](../../simpleicons-5/D/Deutschebahn.Local.png) |




## Deutschebahn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Deutschebahn
include('simpleicons-5/D/Deutschebahn')

' renders the element
Deutschebahn('Deutschebahn', 'Deutschebahn', 'an optional tech label')
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

' loads the Item which embeds the element Deutschebahn
include('simpleicons-5/D/Deutschebahn')

' renders the element
Deutschebahn('Deutschebahn', 'Deutschebahn', 'an optional tech label')
@enduml
```

