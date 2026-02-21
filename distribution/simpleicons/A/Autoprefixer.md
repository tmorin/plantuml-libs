# Autoprefixer


```text
simpleicons/A/Autoprefixer
```

```text
include('simpleicons/A/Autoprefixer')
```



| Illustration | Autoprefixer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Autoprefixer.png) | ![illustration for Autoprefixer](../../simpleicons/A/Autoprefixer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AutoprefixerXs>`
- `<$AutoprefixerSm>`
- `<$AutoprefixerMd>`
- `<$AutoprefixerLg>`





## Autoprefixer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Autoprefixer
include('simpleicons/A/Autoprefixer')

' renders the element
Autoprefixer('Autoprefixer', 'Autoprefixer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Autoprefixer
include('simpleicons/A/Autoprefixer')

' renders the element
Autoprefixer('Autoprefixer', 'Autoprefixer', 'an optional tech label', 'an optional description')
@enduml
```

