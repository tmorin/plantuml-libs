# Firefish


```text
simpleicons-14/F/Firefish
```

```text
include('simpleicons-14/F/Firefish')
```



| Illustration | Firefish |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Firefish.png) | ![illustration for Firefish](../../simpleicons-14/F/Firefish.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FirefishXs>`
- `<$FirefishSm>`
- `<$FirefishMd>`
- `<$FirefishLg>`





## Firefish

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Firefish
include('simpleicons-14/F/Firefish')

' renders the element
Firefish('Firefish', 'Firefish', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Firefish
include('simpleicons-14/F/Firefish')

' renders the element
Firefish('Firefish', 'Firefish', 'an optional tech label', 'an optional description')
@enduml
```

