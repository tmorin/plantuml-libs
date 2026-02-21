# Imagedotsc


```text
simpleicons/I/Imagedotsc
```

```text
include('simpleicons/I/Imagedotsc')
```



| Illustration | Imagedotsc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Imagedotsc.png) | ![illustration for Imagedotsc](../../simpleicons/I/Imagedotsc.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Imagedotsc
include('simpleicons/I/Imagedotsc')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Imagedotsc
include('simpleicons/I/Imagedotsc')

' renders the element
Imagedotsc('Imagedotsc', 'Imagedotsc', 'an optional tech label', 'an optional description')
@enduml
```

