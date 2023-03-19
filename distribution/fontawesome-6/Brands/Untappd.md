# Untappd


```text
fontawesome-6/Brands/Untappd
```

```text
include('fontawesome-6/Brands/Untappd')
```



| Illustration | Untappd |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Untappd.png) | ![illustration for Untappd](../../fontawesome-6/Brands/Untappd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UntappdXs>`
- `<$UntappdSm>`
- `<$UntappdMd>`
- `<$UntappdLg>`





## Untappd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Untappd
include('fontawesome-6/Brands/Untappd')

' renders the element
Untappd('Untappd', 'Untappd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Untappd
include('fontawesome-6/Brands/Untappd')

' renders the element
Untappd('Untappd', 'Untappd', 'an optional tech label', 'an optional description')
@enduml
```

