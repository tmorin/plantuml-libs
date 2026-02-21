# Svgo


```text
simpleicons/S/Svgo
```

```text
include('simpleicons/S/Svgo')
```



| Illustration | Svgo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Svgo.png) | ![illustration for Svgo](../../simpleicons/S/Svgo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SvgoXs>`
- `<$SvgoSm>`
- `<$SvgoMd>`
- `<$SvgoLg>`





## Svgo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Svgo
include('simpleicons/S/Svgo')

' renders the element
Svgo('Svgo', 'Svgo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Svgo
include('simpleicons/S/Svgo')

' renders the element
Svgo('Svgo', 'Svgo', 'an optional tech label', 'an optional description')
@enduml
```

