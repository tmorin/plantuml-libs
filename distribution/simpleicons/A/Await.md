# Await


```text
simpleicons/A/Await
```

```text
include('simpleicons/A/Await')
```



| Illustration | Await |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Await.png) | ![illustration for Await](../../simpleicons/A/Await.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwaitXs>`
- `<$AwaitSm>`
- `<$AwaitMd>`
- `<$AwaitLg>`





## Await

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Await
include('simpleicons/A/Await')

' renders the element
Await('Await', 'Await', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Await
include('simpleicons/A/Await')

' renders the element
Await('Await', 'Await', 'an optional tech label', 'an optional description')
@enduml
```

