# Tablet


```text
fontawesome/Solid/Tablet
```

```text
include('fontawesome/Solid/Tablet')
```



| Illustration | Tablet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Tablet.png) | ![illustration for Tablet](../../fontawesome/Solid/Tablet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TabletXs>`
- `<$TabletSm>`
- `<$TabletMd>`
- `<$TabletLg>`





## Tablet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Tablet
include('fontawesome/Solid/Tablet')

' renders the element
Tablet('Tablet', 'Tablet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tablet
include('fontawesome/Solid/Tablet')

' renders the element
Tablet('Tablet', 'Tablet', 'an optional tech label', 'an optional description')
@enduml
```

