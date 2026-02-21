# Soundcloud


```text
fontawesome/Brands/Soundcloud
```

```text
include('fontawesome/Brands/Soundcloud')
```



| Illustration | Soundcloud |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Soundcloud.png) | ![illustration for Soundcloud](../../fontawesome/Brands/Soundcloud.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SoundcloudXs>`
- `<$SoundcloudSm>`
- `<$SoundcloudMd>`
- `<$SoundcloudLg>`





## Soundcloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Soundcloud
include('fontawesome/Brands/Soundcloud')

' renders the element
Soundcloud('Soundcloud', 'Soundcloud', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Soundcloud
include('fontawesome/Brands/Soundcloud')

' renders the element
Soundcloud('Soundcloud', 'Soundcloud', 'an optional tech label', 'an optional description')
@enduml
```

