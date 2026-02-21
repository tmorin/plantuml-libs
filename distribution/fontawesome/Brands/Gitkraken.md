# Gitkraken


```text
fontawesome/Brands/Gitkraken
```

```text
include('fontawesome/Brands/Gitkraken')
```



| Illustration | Gitkraken |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Gitkraken.png) | ![illustration for Gitkraken](../../fontawesome/Brands/Gitkraken.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GitkrakenXs>`
- `<$GitkrakenSm>`
- `<$GitkrakenMd>`
- `<$GitkrakenLg>`





## Gitkraken

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Gitkraken
include('fontawesome/Brands/Gitkraken')

' renders the element
Gitkraken('Gitkraken', 'Gitkraken', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gitkraken
include('fontawesome/Brands/Gitkraken')

' renders the element
Gitkraken('Gitkraken', 'Gitkraken', 'an optional tech label', 'an optional description')
@enduml
```

