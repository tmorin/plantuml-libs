# Filen


```text
simpleicons-14/F/Filen
```

```text
include('simpleicons-14/F/Filen')
```



| Illustration | Filen |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Filen.png) | ![illustration for Filen](../../simpleicons-14/F/Filen.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FilenXs>`
- `<$FilenSm>`
- `<$FilenMd>`
- `<$FilenLg>`





## Filen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Filen
include('simpleicons-14/F/Filen')

' renders the element
Filen('Filen', 'Filen', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Filen
include('simpleicons-14/F/Filen')

' renders the element
Filen('Filen', 'Filen', 'an optional tech label', 'an optional description')
@enduml
```

