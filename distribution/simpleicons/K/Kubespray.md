# Kubespray


```text
simpleicons/K/Kubespray
```

```text
include('simpleicons/K/Kubespray')
```



| Illustration | Kubespray |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Kubespray.png) | ![illustration for Kubespray](../../simpleicons/K/Kubespray.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KubesprayXs>`
- `<$KubespraySm>`
- `<$KubesprayMd>`
- `<$KubesprayLg>`





## Kubespray

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Kubespray
include('simpleicons/K/Kubespray')

' renders the element
Kubespray('Kubespray', 'Kubespray', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kubespray
include('simpleicons/K/Kubespray')

' renders the element
Kubespray('Kubespray', 'Kubespray', 'an optional tech label', 'an optional description')
@enduml
```

