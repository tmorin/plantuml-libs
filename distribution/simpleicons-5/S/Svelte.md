# Svelte


```text
simpleicons-5/S/Svelte
```

```text
include('simpleicons-5/S/Svelte')
```



| Illustration | Svelte |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Svelte.png) | ![illustration for Svelte](../../simpleicons-5/S/Svelte.Local.png) |




## Svelte

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Svelte
include('simpleicons-5/S/Svelte')

' renders the element
Svelte('Svelte', 'Svelte', 'an optional tech label')
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

' loads the Item which embeds the element Svelte
include('simpleicons-5/S/Svelte')

' renders the element
Svelte('Svelte', 'Svelte', 'an optional tech label')
@enduml
```

