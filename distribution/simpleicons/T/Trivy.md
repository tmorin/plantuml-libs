# Trivy


```text
simpleicons/T/Trivy
```

```text
include('simpleicons/T/Trivy')
```



| Illustration | Trivy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Trivy.png) | ![illustration for Trivy](../../simpleicons/T/Trivy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TrivyXs>`
- `<$TrivySm>`
- `<$TrivyMd>`
- `<$TrivyLg>`





## Trivy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Trivy
include('simpleicons/T/Trivy')

' renders the element
Trivy('Trivy', 'Trivy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Trivy
include('simpleicons/T/Trivy')

' renders the element
Trivy('Trivy', 'Trivy', 'an optional tech label', 'an optional description')
@enduml
```

