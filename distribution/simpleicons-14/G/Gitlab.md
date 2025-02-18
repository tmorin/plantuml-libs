# Gitlab


```text
simpleicons-14/G/Gitlab
```

```text
include('simpleicons-14/G/Gitlab')
```



| Illustration | Gitlab |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Gitlab.png) | ![illustration for Gitlab](../../simpleicons-14/G/Gitlab.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GitlabXs>`
- `<$GitlabSm>`
- `<$GitlabMd>`
- `<$GitlabLg>`





## Gitlab

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Gitlab
include('simpleicons-14/G/Gitlab')

' renders the element
Gitlab('Gitlab', 'Gitlab', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gitlab
include('simpleicons-14/G/Gitlab')

' renders the element
Gitlab('Gitlab', 'Gitlab', 'an optional tech label', 'an optional description')
@enduml
```

