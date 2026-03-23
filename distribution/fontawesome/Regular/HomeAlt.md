# HomeAlt


```text
fontawesome/Regular/HomeAlt
```

```text
include('fontawesome/Regular/HomeAlt')
```



| Illustration | HomeAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/HomeAlt.png) | ![illustration for HomeAlt](../../fontawesome/Regular/HomeAlt.Local.png) |



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
include('fontawesome/Regular/HomeAlt')

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
include('fontawesome/Regular/HomeAlt')

' renders the element
HomeAlt('HomeAlt', 'Home Alt', 'an optional tech label', 'an optional description')
@enduml
```

