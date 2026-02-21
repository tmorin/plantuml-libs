# Imagedotsc


```text
simpleicons-14/I/Imagedotsc
```

```text
include('simpleicons-14/I/Imagedotsc')
```



| Illustration | Imagedotsc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/Imagedotsc.png) | ![illustration for Imagedotsc](../../simpleicons-14/I/Imagedotsc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ImagedotscXs>`
- `<$ImagedotscSm>`
- `<$ImagedotscMd>`
- `<$ImagedotscLg>`





## Imagedotsc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Imagedotsc
include('simpleicons-14/I/Imagedotsc')

' renders the element
Imagedotsc('Imagedotsc', 'Imagedotsc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Imagedotsc
include('simpleicons-14/I/Imagedotsc')

' renders the element
Imagedotsc('Imagedotsc', 'Imagedotsc', 'an optional tech label', 'an optional description')
@enduml
```

