# Tablet


```text
material-4/Hardware/Tablet
```

```text
include('material-4/Hardware/Tablet')
```



| Illustration | Tablet |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/Tablet.png) | ![illustration for Tablet](../../material-4/Hardware/Tablet.Local.png) |




## Tablet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Tablet
include('material-4/Hardware/Tablet')

' renders the element
Tablet('Tablet', 'Tablet', 'an optional tech label')
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

' loads the Item which embeds the element Tablet
include('material-4/Hardware/Tablet')

' renders the element
Tablet('Tablet', 'Tablet', 'an optional tech label')
@enduml
```

