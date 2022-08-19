# Dungeonsanddragons


```text
simpleicons-7/D/Dungeonsanddragons
```

```text
include('simpleicons-7/D/Dungeonsanddragons')
```



| Illustration | Dungeonsanddragons |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/D/Dungeonsanddragons.png) | ![illustration for Dungeonsanddragons](../../simpleicons-7/D/Dungeonsanddragons.Local.png) |




## Dungeonsanddragons

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Dungeonsanddragons
include('simpleicons-7/D/Dungeonsanddragons')

' renders the element
Dungeonsanddragons('Dungeonsanddragons', 'Dungeonsanddragons', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dungeonsanddragons
include('simpleicons-7/D/Dungeonsanddragons')

' renders the element
Dungeonsanddragons('Dungeonsanddragons', 'Dungeonsanddragons', 'an optional tech label', 'an optional description')
@enduml
```
