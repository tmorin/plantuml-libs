# Hulu


```text
simpleicons-14/H/Hulu
```

```text
include('simpleicons-14/H/Hulu')
```



| Illustration | Hulu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Hulu.png) | ![illustration for Hulu](../../simpleicons-14/H/Hulu.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HuluXs>`
- `<$HuluSm>`
- `<$HuluMd>`
- `<$HuluLg>`





## Hulu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Hulu
include('simpleicons-14/H/Hulu')

' renders the element
Hulu('Hulu', 'Hulu', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hulu
include('simpleicons-14/H/Hulu')

' renders the element
Hulu('Hulu', 'Hulu', 'an optional tech label', 'an optional description')
@enduml
```

