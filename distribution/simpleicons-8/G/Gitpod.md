# Gitpod


```text
simpleicons-8/G/Gitpod
```

```text
include('simpleicons-8/G/Gitpod')
```



| Illustration | Gitpod |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Gitpod.png) | ![illustration for Gitpod](../../simpleicons-8/G/Gitpod.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GitpodXs>`
- `<$GitpodSm>`
- `<$GitpodMd>`
- `<$GitpodLg>`





## Gitpod

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Gitpod
include('simpleicons-8/G/Gitpod')

' renders the element
Gitpod('Gitpod', 'Gitpod', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Gitpod
include('simpleicons-8/G/Gitpod')

' renders the element
Gitpod('Gitpod', 'Gitpod', 'an optional tech label', 'an optional description')
@enduml
```

