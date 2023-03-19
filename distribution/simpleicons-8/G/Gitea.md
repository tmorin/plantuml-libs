# Gitea


```text
simpleicons-8/G/Gitea
```

```text
include('simpleicons-8/G/Gitea')
```



| Illustration | Gitea |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Gitea.png) | ![illustration for Gitea](../../simpleicons-8/G/Gitea.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GiteaXs>`
- `<$GiteaSm>`
- `<$GiteaMd>`
- `<$GiteaLg>`





## Gitea

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Gitea
include('simpleicons-8/G/Gitea')

' renders the element
Gitea('Gitea', 'Gitea', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gitea
include('simpleicons-8/G/Gitea')

' renders the element
Gitea('Gitea', 'Gitea', 'an optional tech label', 'an optional description')
@enduml
```

