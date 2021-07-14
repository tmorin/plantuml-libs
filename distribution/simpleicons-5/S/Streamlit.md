# Streamlit


```text
simpleicons-5/S/Streamlit
```

```text
include('simpleicons-5/S/Streamlit')
```



| Illustration | Streamlit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Streamlit.png) | ![illustration for Streamlit](../../simpleicons-5/S/Streamlit.Local.png) |




## Streamlit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Streamlit
include('simpleicons-5/S/Streamlit')

' renders the element
Streamlit('Streamlit', 'Streamlit', 'an optional tech label')
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

' loads the Item which embeds the element Streamlit
include('simpleicons-5/S/Streamlit')

' renders the element
Streamlit('Streamlit', 'Streamlit', 'an optional tech label')
@enduml
```

