# StarOfDavid


```text
fontawesome-6/Solid/StarOfDavid
```

```text
include('fontawesome-6/Solid/StarOfDavid')
```



| Illustration | StarOfDavid |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/StarOfDavid.png) | ![illustration for StarOfDavid](../../fontawesome-6/Solid/StarOfDavid.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StarOfDavidXs>`
- `<$StarOfDavidSm>`
- `<$StarOfDavidMd>`
- `<$StarOfDavidLg>`





## StarOfDavid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element StarOfDavid
include('fontawesome-6/Solid/StarOfDavid')

' renders the element
StarOfDavid('StarOfDavid', 'Star Of David', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element StarOfDavid
include('fontawesome-6/Solid/StarOfDavid')

' renders the element
StarOfDavid('StarOfDavid', 'Star Of David', 'an optional tech label', 'an optional description')
@enduml
```

