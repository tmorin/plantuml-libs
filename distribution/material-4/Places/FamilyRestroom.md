# FamilyRestroom


```text
material-4/Places/FamilyRestroom
```

```text
include('material-4/Places/FamilyRestroom')
```



| Illustration | FamilyRestroom |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/FamilyRestroom.png) | ![illustration for FamilyRestroom](../../material-4/Places/FamilyRestroom.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FamilyRestroomXs>`
- `<$FamilyRestroomSm>`
- `<$FamilyRestroomMd>`
- `<$FamilyRestroomLg>`





## FamilyRestroom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FamilyRestroom
include('material-4/Places/FamilyRestroom')

' renders the element
FamilyRestroom('FamilyRestroom', 'Family Restroom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FamilyRestroom
include('material-4/Places/FamilyRestroom')

' renders the element
FamilyRestroom('FamilyRestroom', 'Family Restroom', 'an optional tech label', 'an optional description')
@enduml
```

