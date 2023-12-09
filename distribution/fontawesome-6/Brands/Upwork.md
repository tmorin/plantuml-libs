# Upwork


```text
fontawesome-6/Brands/Upwork
```

```text
include('fontawesome-6/Brands/Upwork')
```



| Illustration | Upwork |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Upwork.png) | ![illustration for Upwork](../../fontawesome-6/Brands/Upwork.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UpworkXs>`
- `<$UpworkSm>`
- `<$UpworkMd>`
- `<$UpworkLg>`





## Upwork

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Upwork
include('fontawesome-6/Brands/Upwork')

' renders the element
Upwork('Upwork', 'Upwork', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Upwork
include('fontawesome-6/Brands/Upwork')

' renders the element
Upwork('Upwork', 'Upwork', 'an optional tech label', 'an optional description')
@enduml
```

