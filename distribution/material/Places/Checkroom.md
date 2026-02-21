# Checkroom


```text
material/Places/Checkroom
```

```text
include('material/Places/Checkroom')
```



| Illustration | Checkroom |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/Checkroom.png) | ![illustration for Checkroom](../../material/Places/Checkroom.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CheckroomXs>`
- `<$CheckroomSm>`
- `<$CheckroomMd>`
- `<$CheckroomLg>`





## Checkroom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Checkroom
include('material/Places/Checkroom')

' renders the element
Checkroom('Checkroom', 'Checkroom', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Checkroom
include('material/Places/Checkroom')

' renders the element
Checkroom('Checkroom', 'Checkroom', 'an optional tech label', 'an optional description')
@enduml
```

