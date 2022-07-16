# Vbulletin


```text
simpleicons-7/V/Vbulletin
```

```text
include('simpleicons-7/V/Vbulletin')
```



| Illustration | Vbulletin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/V/Vbulletin.png) | ![illustration for Vbulletin](../../simpleicons-7/V/Vbulletin.Local.png) |




## Vbulletin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Vbulletin
include('simpleicons-7/V/Vbulletin')

' renders the element
Vbulletin('Vbulletin', 'Vbulletin', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Vbulletin
include('simpleicons-7/V/Vbulletin')

' renders the element
Vbulletin('Vbulletin', 'Vbulletin', 'an optional tech label')
@enduml
```

