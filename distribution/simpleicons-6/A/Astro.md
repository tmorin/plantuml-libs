# Astro


```text
simpleicons-6/A/Astro
```

```text
include('simpleicons-6/A/Astro')
```



| Illustration | Astro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Astro.png) | ![illustration for Astro](../../simpleicons-6/A/Astro.Local.png) |




## Astro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Astro
include('simpleicons-6/A/Astro')

' renders the element
Astro('Astro', 'Astro', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Astro
include('simpleicons-6/A/Astro')

' renders the element
Astro('Astro', 'Astro', 'an optional tech label')
@enduml
```

