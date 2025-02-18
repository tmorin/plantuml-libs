# Affinitypublisher


```text
simpleicons-14/A/Affinitypublisher
```

```text
include('simpleicons-14/A/Affinitypublisher')
```



| Illustration | Affinitypublisher |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Affinitypublisher.png) | ![illustration for Affinitypublisher](../../simpleicons-14/A/Affinitypublisher.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AffinitypublisherXs>`
- `<$AffinitypublisherSm>`
- `<$AffinitypublisherMd>`
- `<$AffinitypublisherLg>`





## Affinitypublisher

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Affinitypublisher
include('simpleicons-14/A/Affinitypublisher')

' renders the element
Affinitypublisher('Affinitypublisher', 'Affinitypublisher', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Affinitypublisher
include('simpleicons-14/A/Affinitypublisher')

' renders the element
Affinitypublisher('Affinitypublisher', 'Affinitypublisher', 'an optional tech label', 'an optional description')
@enduml
```

