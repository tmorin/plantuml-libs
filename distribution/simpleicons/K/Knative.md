# Knative


```text
simpleicons/K/Knative
```

```text
include('simpleicons/K/Knative')
```



| Illustration | Knative |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Knative.png) | ![illustration for Knative](../../simpleicons/K/Knative.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KnativeXs>`
- `<$KnativeSm>`
- `<$KnativeMd>`
- `<$KnativeLg>`





## Knative

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Knative
include('simpleicons/K/Knative')

' renders the element
Knative('Knative', 'Knative', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Knative
include('simpleicons/K/Knative')

' renders the element
Knative('Knative', 'Knative', 'an optional tech label', 'an optional description')
@enduml
```

