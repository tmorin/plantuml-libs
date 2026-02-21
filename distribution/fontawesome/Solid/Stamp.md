# Stamp


```text
fontawesome/Solid/Stamp
```

```text
include('fontawesome/Solid/Stamp')
```



| Illustration | Stamp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Stamp.png) | ![illustration for Stamp](../../fontawesome/Solid/Stamp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StampXs>`
- `<$StampSm>`
- `<$StampMd>`
- `<$StampLg>`





## Stamp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Stamp
include('fontawesome/Solid/Stamp')

' renders the element
Stamp('Stamp', 'Stamp', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Stamp
include('fontawesome/Solid/Stamp')

' renders the element
Stamp('Stamp', 'Stamp', 'an optional tech label', 'an optional description')
@enduml
```

