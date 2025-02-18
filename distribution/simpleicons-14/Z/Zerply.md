# Zerply


```text
simpleicons-14/Z/Zerply
```

```text
include('simpleicons-14/Z/Zerply')
```



| Illustration | Zerply |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Z/Zerply.png) | ![illustration for Zerply](../../simpleicons-14/Z/Zerply.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZerplyXs>`
- `<$ZerplySm>`
- `<$ZerplyMd>`
- `<$ZerplyLg>`





## Zerply

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Zerply
include('simpleicons-14/Z/Zerply')

' renders the element
Zerply('Zerply', 'Zerply', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zerply
include('simpleicons-14/Z/Zerply')

' renders the element
Zerply('Zerply', 'Zerply', 'an optional tech label', 'an optional description')
@enduml
```

