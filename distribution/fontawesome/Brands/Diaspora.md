# Diaspora


```text
fontawesome/Brands/Diaspora
```

```text
include('fontawesome/Brands/Diaspora')
```



| Illustration | Diaspora |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Diaspora.png) | ![illustration for Diaspora](../../fontawesome/Brands/Diaspora.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DiasporaXs>`
- `<$DiasporaSm>`
- `<$DiasporaMd>`
- `<$DiasporaLg>`





## Diaspora

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Diaspora
include('fontawesome/Brands/Diaspora')

' renders the element
Diaspora('Diaspora', 'Diaspora', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Diaspora
include('fontawesome/Brands/Diaspora')

' renders the element
Diaspora('Diaspora', 'Diaspora', 'an optional tech label', 'an optional description')
@enduml
```

