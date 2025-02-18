# Primevideo


```text
simpleicons-14/P/Primevideo
```

```text
include('simpleicons-14/P/Primevideo')
```



| Illustration | Primevideo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Primevideo.png) | ![illustration for Primevideo](../../simpleicons-14/P/Primevideo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PrimevideoXs>`
- `<$PrimevideoSm>`
- `<$PrimevideoMd>`
- `<$PrimevideoLg>`





## Primevideo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Primevideo
include('simpleicons-14/P/Primevideo')

' renders the element
Primevideo('Primevideo', 'Primevideo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Primevideo
include('simpleicons-14/P/Primevideo')

' renders the element
Primevideo('Primevideo', 'Primevideo', 'an optional tech label', 'an optional description')
@enduml
```

