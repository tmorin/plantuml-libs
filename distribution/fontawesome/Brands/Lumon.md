# Lumon


```text
fontawesome/Brands/Lumon
```

```text
include('fontawesome/Brands/Lumon')
```



| Illustration | Lumon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Lumon.png) | ![illustration for Lumon](../../fontawesome/Brands/Lumon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LumonXs>`
- `<$LumonSm>`
- `<$LumonMd>`
- `<$LumonLg>`





## Lumon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Lumon
include('fontawesome/Brands/Lumon')

' renders the element
Lumon('Lumon', 'Lumon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lumon
include('fontawesome/Brands/Lumon')

' renders the element
Lumon('Lumon', 'Lumon', 'an optional tech label', 'an optional description')
@enduml
```

