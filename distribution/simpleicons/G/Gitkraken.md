# Gitkraken


```text
simpleicons/G/Gitkraken
```

```text
include('simpleicons/G/Gitkraken')
```



| Illustration | Gitkraken |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Gitkraken.png) | ![illustration for Gitkraken](../../simpleicons/G/Gitkraken.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gitkraken
include('simpleicons/G/Gitkraken')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gitkraken
include('simpleicons/G/Gitkraken')

' renders the element
Gitkraken('Gitkraken', 'Gitkraken', 'an optional tech label', 'an optional description')
@enduml
```

