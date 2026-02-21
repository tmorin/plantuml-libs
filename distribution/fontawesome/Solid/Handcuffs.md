# Handcuffs


```text
fontawesome/Solid/Handcuffs
```

```text
include('fontawesome/Solid/Handcuffs')
```



| Illustration | Handcuffs |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Handcuffs.png) | ![illustration for Handcuffs](../../fontawesome/Solid/Handcuffs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandcuffsXs>`
- `<$HandcuffsSm>`
- `<$HandcuffsMd>`
- `<$HandcuffsLg>`





## Handcuffs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Handcuffs
include('fontawesome/Solid/Handcuffs')

' renders the element
Handcuffs('Handcuffs', 'Handcuffs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Handcuffs
include('fontawesome/Solid/Handcuffs')

' renders the element
Handcuffs('Handcuffs', 'Handcuffs', 'an optional tech label', 'an optional description')
@enduml
```

