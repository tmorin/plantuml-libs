# Stairs


```text
material-4/Places/Stairs
```

```text
include('material-4/Places/Stairs')
```



| Illustration | Stairs |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/Stairs.png) | ![illustration for Stairs](../../material-4/Places/Stairs.Local.png) |




## Stairs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Stairs
include('material-4/Places/Stairs')

' renders the element
Stairs('Stairs', 'Stairs', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Stairs
include('material-4/Places/Stairs')

' renders the element
Stairs('Stairs', 'Stairs', 'an optional tech label')
@enduml
```

