# Googlefonts


```text
simpleicons-5/G/Googlefonts
```

```text
include('simpleicons-5/G/Googlefonts')
```



| Illustration | Googlefonts |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Googlefonts.png) | ![illustration for Googlefonts](../../simpleicons-5/G/Googlefonts.Local.png) |




## Googlefonts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Googlefonts
include('simpleicons-5/G/Googlefonts')

' renders the element
Googlefonts('Googlefonts', 'Googlefonts', 'an optional tech label')
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

' loads the Item which embeds the element Googlefonts
include('simpleicons-5/G/Googlefonts')

' renders the element
Googlefonts('Googlefonts', 'Googlefonts', 'an optional tech label')
@enduml
```

