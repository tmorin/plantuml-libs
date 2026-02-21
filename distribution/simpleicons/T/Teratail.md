# Teratail


```text
simpleicons/T/Teratail
```

```text
include('simpleicons/T/Teratail')
```



| Illustration | Teratail |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Teratail.png) | ![illustration for Teratail](../../simpleicons/T/Teratail.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TeratailXs>`
- `<$TeratailSm>`
- `<$TeratailMd>`
- `<$TeratailLg>`





## Teratail

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Teratail
include('simpleicons/T/Teratail')

' renders the element
Teratail('Teratail', 'Teratail', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Teratail
include('simpleicons/T/Teratail')

' renders the element
Teratail('Teratail', 'Teratail', 'an optional tech label', 'an optional description')
@enduml
```

