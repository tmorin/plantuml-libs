# Knative


```text
simpleicons-14/K/Knative
```

```text
include('simpleicons-14/K/Knative')
```



| Illustration | Knative |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Knative.png) | ![illustration for Knative](../../simpleicons-14/K/Knative.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Knative
include('simpleicons-14/K/Knative')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Knative
include('simpleicons-14/K/Knative')

' renders the element
Knative('Knative', 'Knative', 'an optional tech label', 'an optional description')
@enduml
```

