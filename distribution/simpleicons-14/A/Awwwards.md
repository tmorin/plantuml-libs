# Awwwards


```text
simpleicons-14/A/Awwwards
```

```text
include('simpleicons-14/A/Awwwards')
```



| Illustration | Awwwards |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Awwwards.png) | ![illustration for Awwwards](../../simpleicons-14/A/Awwwards.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwwwardsXs>`
- `<$AwwwardsSm>`
- `<$AwwwardsMd>`
- `<$AwwwardsLg>`





## Awwwards

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Awwwards
include('simpleicons-14/A/Awwwards')

' renders the element
Awwwards('Awwwards', 'Awwwards', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Awwwards
include('simpleicons-14/A/Awwwards')

' renders the element
Awwwards('Awwwards', 'Awwwards', 'an optional tech label', 'an optional description')
@enduml
```

