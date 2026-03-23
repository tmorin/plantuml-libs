# HomeAlt


```text
fontawesome/Solid/HomeAlt
```

```text
include('fontawesome/Solid/HomeAlt')
```



| Illustration | HomeAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HomeAlt.png) | ![illustration for HomeAlt](../../fontawesome/Solid/HomeAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HomeAltXs>`
- `<$HomeAltSm>`
- `<$HomeAltMd>`
- `<$HomeAltLg>`





## HomeAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HomeAlt
include('fontawesome/Solid/HomeAlt')

' renders the element
HomeAlt('HomeAlt', 'Home Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HomeAlt
include('fontawesome/Solid/HomeAlt')

' renders the element
HomeAlt('HomeAlt', 'Home Alt', 'an optional tech label', 'an optional description')
@enduml
```

