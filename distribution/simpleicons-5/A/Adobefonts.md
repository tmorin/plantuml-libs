# Adobefonts


```text
simpleicons-5/A/Adobefonts
```

```text
include('simpleicons-5/A/Adobefonts')
```



| Illustration | Adobefonts |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Adobefonts.png) | ![illustration for Adobefonts](../../simpleicons-5/A/Adobefonts.Local.png) |




## Adobefonts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Adobefonts
include('simpleicons-5/A/Adobefonts')

' renders the element
Adobefonts('Adobefonts', 'Adobefonts', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Adobefonts
include('simpleicons-5/A/Adobefonts')

' renders the element
Adobefonts('Adobefonts', 'Adobefonts', 'an optional tech label')
@enduml
```

