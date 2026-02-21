# Mojeek


```text
simpleicons/M/Mojeek
```

```text
include('simpleicons/M/Mojeek')
```



| Illustration | Mojeek |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Mojeek.png) | ![illustration for Mojeek](../../simpleicons/M/Mojeek.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MojeekXs>`
- `<$MojeekSm>`
- `<$MojeekMd>`
- `<$MojeekLg>`





## Mojeek

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Mojeek
include('simpleicons/M/Mojeek')

' renders the element
Mojeek('Mojeek', 'Mojeek', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mojeek
include('simpleicons/M/Mojeek')

' renders the element
Mojeek('Mojeek', 'Mojeek', 'an optional tech label', 'an optional description')
@enduml
```

