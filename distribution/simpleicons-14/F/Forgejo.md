# Forgejo


```text
simpleicons-14/F/Forgejo
```

```text
include('simpleicons-14/F/Forgejo')
```



| Illustration | Forgejo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Forgejo.png) | ![illustration for Forgejo](../../simpleicons-14/F/Forgejo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ForgejoXs>`
- `<$ForgejoSm>`
- `<$ForgejoMd>`
- `<$ForgejoLg>`





## Forgejo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Forgejo
include('simpleicons-14/F/Forgejo')

' renders the element
Forgejo('Forgejo', 'Forgejo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Forgejo
include('simpleicons-14/F/Forgejo')

' renders the element
Forgejo('Forgejo', 'Forgejo', 'an optional tech label', 'an optional description')
@enduml
```

