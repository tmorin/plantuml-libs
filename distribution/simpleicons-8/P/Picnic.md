# Picnic


```text
simpleicons-8/P/Picnic
```

```text
include('simpleicons-8/P/Picnic')
```



| Illustration | Picnic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Picnic.png) | ![illustration for Picnic](../../simpleicons-8/P/Picnic.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PicnicXs>`
- `<$PicnicSm>`
- `<$PicnicMd>`
- `<$PicnicLg>`





## Picnic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Picnic
include('simpleicons-8/P/Picnic')

' renders the element
Picnic('Picnic', 'Picnic', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Picnic
include('simpleicons-8/P/Picnic')

' renders the element
Picnic('Picnic', 'Picnic', 'an optional tech label', 'an optional description')
@enduml
```

