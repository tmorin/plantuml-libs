# Mixcloud


```text
fontawesome/Brands/Mixcloud
```

```text
include('fontawesome/Brands/Mixcloud')
```



| Illustration | Mixcloud |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Mixcloud.png) | ![illustration for Mixcloud](../../fontawesome/Brands/Mixcloud.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MixcloudXs>`
- `<$MixcloudSm>`
- `<$MixcloudMd>`
- `<$MixcloudLg>`





## Mixcloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Mixcloud
include('fontawesome/Brands/Mixcloud')

' renders the element
Mixcloud('Mixcloud', 'Mixcloud', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mixcloud
include('fontawesome/Brands/Mixcloud')

' renders the element
Mixcloud('Mixcloud', 'Mixcloud', 'an optional tech label', 'an optional description')
@enduml
```

